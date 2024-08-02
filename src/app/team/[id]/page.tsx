type PageProps = {
  params: {
    id: string
  }
}

export default function TeamIdPage(props: PageProps) {
  const {params: {id}} = props;
  return <p>Team {id}</p>
}
