
export default async (idList, data) => {

  idList.forEach(id => {
    if (!data.answers[id]) {
      data.answers[id] = -1
    }
  });

  await fetch("https://1121258750224523.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/vote5/submit/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}


