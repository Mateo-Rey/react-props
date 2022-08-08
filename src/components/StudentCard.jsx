export default function StudentCard({ student }) {
    return (
        <section>
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <id>Id: {student.id}</id>
        </section>
    )
}