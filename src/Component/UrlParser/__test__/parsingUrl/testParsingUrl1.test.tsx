import "";

const url ="ww.yahoo.fr";

test("give the differents part of the url", () =>{
    expect(url).toMatch(/((?<protocol>\w+)\:\/\/)?(?<domain>(w{3}\.)\w+\.\w+)(?<port>(\:\w*))?(\/(?<path>\w*))?(\??(?<query>[=\w+!§$()ß\\]*))?(\#?(?<fragment>[\w]*))?/);
})