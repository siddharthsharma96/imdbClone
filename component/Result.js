import Card from "./Card"
import Style from "./card.module.css"
const Result=({results})=>{
    return(
        <div className={Style.card}>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
    )
}
export default Result;