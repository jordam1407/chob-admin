import tableDataComplex from './variables/tableDataComplex.json'
import ComplexTable from './components/testTable'

const Tables = () => {
    return (
        <div>
            <div className="mt-5 grid h-full grid-cols-1">
                <ComplexTable leads={tableDataComplex} />
            </div>
        </div>
    )
}

export default Tables
