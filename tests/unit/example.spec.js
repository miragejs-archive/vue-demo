import { Server, Model } from "miragejs"
import axios from "axios"

describe('testing', () => {
    it("routes config option works", async () => {
        
        let server = new Server({
            environment: "test",
            logging: true,
            models: {
                user: Model
            },
            routes() {
                this.namespace = "api";

                this.get("/users");
            }
        });
        server.createList("user", 3);
        let response = await axios.get("/api/users");
        expect(response.data).toEqual({
            users: [{ id: "1" }, { id: "2" }, { id: "3" }]
        });
        server.shutdown()
    });
})
