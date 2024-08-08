import { Lusitana } from "next/font/google"
const lusitana = Lusitana({
    weight: '400',
    subsets: ['latin']
})
export default function Page() {
    return (
        <div className={lusitana.className}>
            <div className="mb-20">
                <h1 className="text-4xl underline mb-5">These are the features i want to implement on this website</h1>
                <ul>
                    <li>Calorie tracker per meal/day</li>
                    <li>Did i exercise that day?</li>
                    <li>Did i eat anything unnecessary/unhealthy that day?</li>
                    <li>Weekly overhead view, how many days did i exercise that week?</li>
                    <li>What musclegroup did exercise that day?</li>
                    <li>What exercises did i do on that day, reps/sets/weight?</li>
                    <li>This is a test for the git thing 123</li>
                </ul>
            </div>
            <div>
                <h1 className="text-4xl underline mb-5">Features to implement:</h1>
                <ul>
                    <li>Login with username and password, will likely need a database</li>

                </ul>
            </div>

        </div>

    )
}