const blogs = [];

function create1stBlog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      blogs.push({ title: 'BLOG1' });
      resolve();
    }, 3000);
  });
}

function create2ndBlog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      blogs.push({ title: 'BLOG2' });
      resolve();
    }, 2000);
  });
}

function deleteBlog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (blogs.length === 0) {
        reject('ERROR');
      } else {
        const deletedBlog = blogs.pop();
        resolve(deletedBlog);
      }
    }, 1000);
  });
}
function createPost() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lastActivityTime = new Date().toLocaleString();
        resolve(lastActivityTime);
      }, 1000);
    });
  }

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lastActivityTime = new Date().toLocaleString();
      resolve(lastActivityTime);
    }, 1000);
  });
}

create1stBlog()
  .then(() => create2ndBlog())
  .then(() => {
    return Promise.all([createPost(), updateLastUserActivityTime()]);
  })
  .then(([createdPost, lastActivityTime]) => {
    console.log('Posts:', blogs);
    console.log('Last Activity Time:', lastActivityTime);
    return deleteBlog();
  })
  .then(() => {
    console.log('Updated Posts:', blogs);
  })
  .catch((error) => {
    console.log('Error:', error);
  });



