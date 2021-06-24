import { main } from "../src/main";

// Unit Tests
export async function runTests() {
    let result = await main()
    if(result)
    {
        console.log(result)
    }

    if(process.env.EXPECTED_TO === 'fail'){
        throw new Error('Expected failure but deployement passed.')
    }
}

runTests().catch(e => {
    if(process.env.EXPECTED_TO === 'pass'){
        console.error(e)
        process.exit(1)
    }
})
