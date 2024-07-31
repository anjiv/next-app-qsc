type Todos = {
  id: number
  title: string
  completed: boolean
};

export async function getTodos() {
  await wait(2000);
  return fetch(`${process.env.API_URL}/todos`)
    .then(response => response.json())
    .then(data => data as Todos[]);
}

function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  });
}
