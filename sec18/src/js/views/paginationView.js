import View from './View.js';
import icon from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    //   page 1 , and there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return 'page 1, others';
    }

    // page 1, and there are NO other pages
    if (this._data.page === numPages && numPages > 1) {
      return 'last page';
    }

    // Last page
    if (this._data.page < numPages) {
      return 'other page';
    }
    // Other page
    return 'only 1 page';
  }
}

export default new PaginationView();
