import { main } from "../src/main";

// Unit Tests
export async function runTests() {
    try {
        let result = await main()
        if (result) {
            console.log(result)
        }
        return 'pass'
    } catch (e) {
        console.error(e)
        return 'fail'
    }
}

runTests().then(outcome => {
    console.log("OUTCOME: " + outcome)
    if(outcome != process.env.EXPECTED_TO){
        console.error(`Expected outcome did not meet the real outcome. Expected value: ${process.env.EXPECTED_TO}, actual value: ${outcome}`)
        process.exit(1)
    }
})
