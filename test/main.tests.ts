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
        return 'fail'
    }
}

runTests().then(outcome => {
    if(outcome != process.env.EXPECTED_TO){
        throw new Error(`Expected outcome did not meet the real outcome. Expected value: ${process.env.EXPECTED_TO}, actual value: ${outcome}`)
    }
}).catch(e => {
    if (process.env.EXPECTED_TO === 'pass') {
        console.error(e)
        process.exit(1)
    }
})
