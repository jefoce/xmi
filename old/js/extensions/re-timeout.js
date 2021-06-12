/**
 * @param {function} func 
 * @param {number} ms 
 */
export function ReTimeout(func, ms) {
    this._timeout = 0;
    this._ms = ms;
    this._func = func;

    this.restart = () => { 
        clearTimeout(this._timeout);
        this._timeout = setTimeout(this._func, this._ms);
    }
}