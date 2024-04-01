// const A = () => {
//     useEffect(() => {
//         console.log('A')
//     }, [])

//     return <></>
// }

// const B = () => {
//     useEffect(() => {
//         console.log('B')
//     }, [])

//     return <C />
// }

// const C = () => {
//     useEffect(() => {
//         console.log('C')
//     }, [])

//     return <></>
// }

// export default function App() {
//     return (
//         <>
//             <A />
//             <B />
//         </>
//     )
// }

Array.from({ length: 8})
    .map((_, index) => index)
    .filter((_, index) => index % 2 === 0)
    .reduce(
        (acc, _, index) => {
            acc.push({ id: index})
            return acc
        },
        [],
    )

console.log(Array);

