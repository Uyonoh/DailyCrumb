interface User {
    userId: number;
    name: string;
    image: string;
}

function getUserById(userId: number):User | undefined {
    const users: User[] = [
            {
            userId: 2,
            name: "Sophia Carter",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSRnJbtnyu3nAHxgZgL1sfnE51NnmL3vn-XOwPTpqyD7PKgICW6HmPqIrgFhsmhniEq-ycEtsDccWWXNLOJO3Ft_Fchr-QqGYXF-sQ3dxM3tWxl-AAlV7izJww1sTipc8gWrDJNO84XD2PdlEBYFVbeR7_zHIbgTDCqTP4T83y18Vw7o1xzBkpmd6ipybI7DA4AtQY3ITp290PcfFQWi4GYSJIVxbqDhtWbSpsk5d80ZpiMC59xDZWQNeQoYEFvrAI5l3VsOtDjmpD"
            },
            {
            userId: 3,
            name: "Liam Bennett",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5-oToSQD4qQ3N9Q-eDFlRsVmwQ0DN39wS0S8IgJrnJ7fV6NAZNG5zesnPfMvvCifE5sVflv4uarlTSIdPenXfZbkvOeZiics8qoTQbpiCgL28YmAfTwJiFzOkZI2MeKnqmIOKP0y3tZHvy5OwXzc2ZUFgxHet9MrT2gIVgXF8-0Niyr1wX0ZOHRAcjZVetV34qdF78mkpyKaAedIOuaF46nJCoBzBzCa9AL6WcbY52CE9f9Mb_icPw2s865lnDcNgl1j97OyAekQR"
            }
        ]

    let user: User | undefined;
        users.forEach((user_) => {
            if (user_.userId === userId) {
                user = user_;
            }
        })

    return user;
}


export type { User };
export { getUserById };