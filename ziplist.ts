function zipList(list: unknown[], list2: unknown[]): unknown[]{
    const result = [];
    for(let i=0; i<list.length; i++){
        result.push(list[i], list2[i]);
    }
    return result;
}