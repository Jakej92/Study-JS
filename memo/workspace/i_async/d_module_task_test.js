// // 게시글 정보를 전달받은 후,
// // 게시글 조회를 모듈화하여 사용한다.
// // 게시글 조회시, 회원의 번호를 전달받아서 그 작성자의 게시글만 가져온다.
// // 전체 정보를 출력한다.
// const postService = (() => {
//     const getPosts = async (userId, callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();
//         if (callback) {
//             return callback(userId, posts);
//         }
//     };
//     return {
//         getPosts: getPosts,
//     };
// })();
// const getMyPosts = (userId, posts) => {
//     return posts.filter((post) => post.userId === userId);
// };
// const printMyPosts = async () => {
//     const myPosts = await postService.getPosts(4, getMyPosts);
//     console.log(myPosts);
// };
// printMyPosts();
// const postInfo = (() => {
//     const postCheck = async (userId, callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();
//         if (callback) {
//             const userPosts = posts.filter((post) => post.userId === userId);
//             callback(userPosts);
//         }
//     };
//     return {
//         postCheck: postCheck,
//     };
// })();

// const printPost = (posts) => {
//     posts.forEach((post) => {
//         console.log(
//             `userId: ${post.userId}, id: ${post.id},title: ${post.title}, body: ${post.body}`
//         );
//     });
// };

// postInfo.postCheck(1, printPost);

// // 앨범 정보를 전달받은 후,
// // 회원 번호가 5인 정보를 모두 가져온다.
// // 그 중 userId와 title만 출력한다.

// const albumInfo = (() => {
//     const userAlbum = async (userId, callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/albums"
//         );
//         const albums = await response.json();
//         if (callback) {
//             const userAlbums = albums.filter(
//                 (album) => album.userId === userId
//             );
//             callback(userAlbums);
//         }
//     };
//     return {
//         userAlbum: userAlbum,
//     };
// })();

// const printAlbum = (userAlbums) => {
//     userAlbums.forEach((album) => {
//         console.log(`userId: ${album.userId}, title: ${album.title}`);
//     });
// };

// albumInfo.userAlbum(5, printAlbum);

// // // 앨범 정보를 전달받은 후,
// // // 회원 번호가 5인 정보를 모두 가져온다.
// // // 그 중 userId와 title만 출력한다.

// const albumService = (() => {
//     const userAlbum = async (userId, callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/albums"
//         );
//         const albums = await response.json();
//         if (callback) {
//             return callback(userId, albums);
//         }
//     };
//     return {
//         userAlbum: userAlbum,
//     };
// })();
// const getMyAlbums = (userId, albums) => {
//     return albums.filter((album) => album.userId === userId);
// };
// const printAlbumInfo = async () => {
//     const myAlbums = await albumService.userAlbum(5, getMyAlbums);
//     myAlbums.forEach(({ userId, title }) => {
//         console.log(userId, title);
//     });
// };
// printAlbumInfo();

// // // 앨범 정보를 전달받은 후,  // albumService , userAlbum, albums, album
// // // 회원 번호가 5, id가 50인 정보를 가져온다. // getMyAlbums, printAlbums
// // // 그 중 userId와 id, title을 출력한다.

// const albumService = (() => {
//     const userAlbum = async (userId, id, callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/albums"
//         );
//         const albums = await response.json();
//         if (callback) {
//             return callback(userId, id, albums);
//         }
//     };
//     return {
//         userAlbum: userAlbum,
//     };
// })();
// const getMyAlbums = (userId, id, albums) => {
//     return albums
//         .filter((album) => album.userId === userId)
//         .filter((album) => album.id === id);
// };
// const printAlbums = async () => {
//     const myAlbums = await albumService.userAlbum(5, 50, getMyAlbums);
//     myAlbums.forEach(({ userId, id, title }) => {
//         console.log(userId, id, title);
//     });
// };
// printAlbums();

// // // 앨범 정보를 전달받은 후,  // albumService , userAlbum, albums, album
// // // 회원 번호가 5인 정보를 모두 가져온다. // getMyAlbums, printAlbums
// // // 그 중 userId와 title만 출력한다.

// const albumService = (() => {
//     const userAlbum = async (userId, callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/albums"
//         );
//         const albums = await response.json();
//         if (callback) {
//             return callback(userId, albums);
//         }
//     };
//     return {
//         userAlbum: userAlbum,
//     };
// })();
// const getMyAlbums = (userId, albums) => {
//     return albums.filter((album) => album.userId === userId);
// };
// const printMyAlbums = async () => {
//     const myAlbums = await albumService.userAlbum(5, getMyAlbums);
//     myAlbums.forEach(({ userId, title }) => {
//         console.log(userId, title);
//     });
// };
// printMyAlbums();

// // // 앨범 정보를 전달받은 후,  // albumService , userAlbum, albums, album
// // // 회원 번호가 5, id가 50인 정보를 가져온다. // getMyAlbums, printAlbums
// // // 그 중 userId와 id, title을 출력한다.

const albumService = (() => {
    const userAlbum = async (userId, id, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/albums"
        );
        const albums = await response.json();
        if (callback) {
            return callback(userId, id, albums);
        }
    };
    return {
        userAlbum: userAlbum,
    };
})();
const getMyAlbums = (userId, id, albums) => {
    return albums
        .filter((album) => album.userId === userId)
        .filter((album) => album.id === id);
};
const printAlbum = async () => {
    const myAlbums = await albumService.userAlbum(5, 50, getMyAlbums);
    myAlbums.forEach(({ userId, id, title }) => {
        console.log(`userId: ${userId} id: ${id} title: ${title}`);
    });
};
printAlbum();
