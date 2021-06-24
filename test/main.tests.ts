import { main } from "../src/main";
import * as assert from 'assert';

// Unit Tests
export async function runTests() {
    console.log("EXPECTED_TO: " + process.env.EXPECTED_TO)
    let result = await main()
    if(result)
    {
        console.log(result)
    }
}

runTests().catch(e => {
    console.error(e)
    process.exit(1)
})
