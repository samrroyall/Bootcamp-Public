//Given a sorted array of pages where a term appears, produce an
//index string. Consecutive pages should form ranges separated by
//a hyphen.
//[1, *13,14,15,16,* 37,38,70] -> return "1,13-16,37-38,70"

function bookIndex(pages){
    let result = "";
    let start = 0;
    while (start < pages.length) {
        let end = start+1;
        if (pages[end] !== pages[start]+1) {
            result += `${pages[start]}, `;
            start++;
            continue;
        }
        while (pages[end] === pages[end-1]+1) { 
            if (end === pages.length-1) {
                result += `${pages[start]}-${pages[end]}, `;
                return result.substring(0, result.length-2);
            }
            end++;
        }
        result += `${pages[start]}-${pages[end-1]}, `;
        start = end;
    }
    return result.substring(0, result.length-2);
}
console.log("[1,13,14,15,16,37,38,70]:")
console.log(bookIndex([1,13,14,15,16,37,38,70])); // -> return "1,13-16,37-38,70"
console.log("[1,3,5,7,9]:")
console.log(bookIndex([1,3,5,7,9])); // -> return "1,13-16,37-38,70"
console.log('[1,2,3,4,5,6,7,8]:');
console.log(bookIndex([1,2,3,4,5,6,7,8])); // -> return "1,13-16,37-38,70"
console.log('[]:');
console.log(bookIndex([])); // -> return "1,13-16,37-38,70"