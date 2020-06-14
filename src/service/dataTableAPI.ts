

export async function loadUsersData(url: string) {
    return  fetch(url).then((response) => response.json());
   // res;

}
