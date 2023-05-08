const Cards = (props) => {
  console.log(props)
  return (
    <div>
      {props.description}
      {props.task}
      {props.rest}
    </div>
  )
}

export default Cards