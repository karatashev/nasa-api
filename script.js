//Template for api

document.querySelector('img').classList.add('hide')
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=kniosGaCzybWSnLVonWcq7Tfjdm6VP9zi5lzsBTd&date=${choice}`

  fetch(url)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
      console.log(data, choice)
      if (data.media_type === 'image') {
        document.querySelector('img').classList.remove('hide');
        document.querySelector('img').src = data.hdurl
        document.querySelector('iframe').classList.add('hide');

      }
      else if (data.media_type === 'video') {
        document.querySelector('iframe').classList.remove('hide');
        document.querySelector('iframe').src = data.url
        document.querySelector('img').classList.add('hide')
      }

      document.querySelector('.explanation').innerText = data.explanation
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}