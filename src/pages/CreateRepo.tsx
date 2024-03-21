export const CreateRepo = () => {
  return (
    <div class='p-3'>
      <h2 class='text-3xl'>Create a repository.</h2>
      <hr class='mt-1 mb-4' />
      <form class='flex flex-col gap-2'>
        <input placeholder='Repository name...'>Repo Name</input>
        <input placeholder='Owner...'>Owner</input>
        <input placeholder='Description...'>Description</input>
      </form>
    </div>
  )
}

export default CreateRepo
