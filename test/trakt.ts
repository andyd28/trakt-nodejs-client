import assert from "assert";
import fs from "fs";
import Trakt, {
    TraktMovie,
    TraktAuthenticationDeviceCodeResponse,
    TraktAuthenticationGetTokenResponse,
    TraktUsersCreateCustomListResponse,
} from "../index";

const trakt = new Trakt({
    client_id: "e99bfbbf5321a4534a96cdb2ea4b787fcc6f7df468ce73f44a734a488a1cb442",
    client_secret: "4a291bba571c88b2a0febef869ad939812284248438b7567c26f631feeab2dc8",
});

let deviceCodeResponse = {} as TraktAuthenticationDeviceCodeResponse;
let accessToken = {} as TraktAuthenticationGetTokenResponse;

describe("Device Code Authentication", function () {
    if (fs.existsSync("./test/trakt.json")) {
        accessToken = JSON.parse(fs.readFileSync("./test/trakt.json", "utf8"));
    }

    if (accessToken?.access_token) {
        it("should return a refreshed token or the current one if still fresh", async function () {
            trakt.ensureToken(accessToken);
        });
    } else {
        it("should return a device code for later use", async function () {
            deviceCodeResponse = (await trakt.authentication.deviceCode()).body;
            console.log(deviceCodeResponse);

            assert.ok(deviceCodeResponse);
        });

        it("should poll the trakt server while the device code is entered into the site", async function () {
            this.timeout(30000);
            accessToken = (await trakt.pollToken(deviceCodeResponse)).body as TraktAuthenticationGetTokenResponse;

            fs.writeFileSync("./test/trakt.json", JSON.stringify(accessToken));

            assert.ok(accessToken.access_token);
        });
    }
});

let movie: TraktMovie = {} as TraktMovie;

describe("Movies", function () {
    it("should retrieve trending movies", async function () {
        const result = await trakt.movies.trending({});

        assert(result.body.length);

        if (Array.isArray(result.body) && result.body.length > 0) movie = result.body[0].movie;
    });
});

describe("User", function () {
    let username = "me";
    let testList: TraktUsersCreateCustomListResponse = {} as TraktUsersCreateCustomListResponse;

    it("should retrieve user settings", async function () {
        const result = await trakt.users.settings();

        assert(result.body?.user?.username);
    });

    it("should create a list", async function () {
        const result = await trakt.users.createCustomList({ id: username, name: "Test List" });
        testList = result.body;

        assert.equal(result.body.name, "Test List");
    });

    it("should add a movie to the test list", async function () {
        const result = await trakt.users.updateCustomList({
            id: username,
            list_id: testList.ids.slug,
            ...movie,
        });

        assert.equal(result.statusCode, 200);
    });

    it("should delete the list", async function () {
        const result = await trakt.users.deleteAUsersCustomList({ id: username, list_id: testList.ids.slug });

        assert.equal(result.statusCode, 204);
    });
});
