import uniq from 'uniq';


export default (str) => {
    return uniq(str.split(','));
}