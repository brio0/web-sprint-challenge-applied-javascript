const Header = (title, date, temp) => {
  const headerWrapper = document.createElement('div');
  const dateSpan = document.createElement('span');
  const h1Title = document.createElement('h1');
  const tempSpan = document.createElement('span');

  headerWrapper.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  dateSpan.textContent = date;
  h1Title.textContent = title;
  tempSpan.textContent = temp;

  headerWrapper.appendChild(dateSpan);
  headerWrapper.appendChild(h1Title);
  headerWrapper.appendChild(tempSpan);

  return headerWrapper



  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  document.querySelector(selector).appendChild(Header('Sprint!', 'June 9th, 2022', 'Temp'));

  return selector
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
