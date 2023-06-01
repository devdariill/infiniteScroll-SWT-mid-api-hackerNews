function ListOfComments (props: { ids: number[] }) {
  const { ids } = props
  return (
    <>
      {JSON.stringify(ids)}
    </>
  )
}

export default ListOfComments
