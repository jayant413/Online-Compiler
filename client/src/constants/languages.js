import {
    python,
    python_coloured,
    c,
    c_coloured,
    cpp_coloured,
    cpp,
    java_coloured,
    js_coloured,
    cSharp_coloured,
    ts_coloured,
    go_coloured,
    php_coloured,
    r_coloured,
    rust_coloured,
} from '../assets/images/languageLogo'


const languages = [
    {
        id: 92,
        name: "Python",
        logo: python,
        logo_coloured: python_coloured,
        snippet: "IyBPbmxpbmUgUHl0aG9uIGNvbXBpbGVyIChpbnRlcnByZXRlcikgdG8gcnVuIFB5dGhvbiBvbmxpbmUuCiMgV3JpdGUgUHl0aG9uIDMgY29kZSBpbiB0aGlzIG9ubGluZSBlZGl0b3IgYW5kIHJ1biBpdC4KcHJpbnQoIkhlbGxvIHdvcmxkIik=",
        file_extension: "py",

    },
    {
        id: 50,
        name: "C",
        logo: c,
        logo_coloured: c_coloured,
        snippet: "Ly8gT25saW5lIEMgY29tcGlsZXIgdG8gcnVuIEMgcHJvZ3JhbSBvbmxpbmUKI2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbigpIHsKICAgIC8vIFdyaXRlIEMgY29kZSBoZXJlCiAgICBwcmludGYoIkhlbGxvIHdvcmxkIik7CgogICAgcmV0dXJuIDA7Cn0=",

        file_extension: "c",
    },
    {
        id: 54,
        name: "CPP",
        logo: cpp,
        logo_coloured: cpp_coloured,
        snippet: "Ly8gT25saW5lIEMrKyBjb21waWxlciB0byBydW4gQysrIHByb2dyYW0gb25saW5lCiNpbmNsdWRlIDxpb3N0cmVhbT4KCmludCBtYWluKCkgewogICAgLy8gV3JpdGUgQysrIGNvZGUgaGVyZQogICAgc3RkOjpjb3V0IDw8ICJIZWxsbyB3b3JsZCEiOwoKICAgIHJldHVybiAwOwp9",
        file_extension: "cpp",
    },
    {
        id: 91,
        name: "Java",
        logo_coloured: java_coloured,
        snippet: "Ly8gT25saW5lIEphdmEgQ29tcGlsZXIKLy8gVXNlIHRoaXMgZWRpdG9yIHRvIHdyaXRlLCBjb21waWxlIGFuZCBydW4geW91ciBKYXZhIGNvZGUgb25saW5lCgpjbGFzcyBIZWxsb1dvcmxkIHsKICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBtYWluKFN0cmluZ1tdIGFyZ3MpIHsKICAgICAgICBTeXN0ZW0ub3V0LnByaW50bG4oIkhlbGxvLCBXb3JsZCEiKTsKICAgIH0KfQ==",
        file_extension: "java",
    },
    {
        id: 93,
        name: "JavaScript",
        logo_coloured: js_coloured,
        snippet: "Ly8gT25saW5lIEphdmFzY3JpcHQgRWRpdG9yIGZvciBmcmVlCi8vIFdyaXRlLCBFZGl0IGFuZCBSdW4geW91ciBKYXZhc2NyaXB0IGNvZGUgdXNpbmcgSlMgT25saW5lIENvbXBpbGVyCgpjb25zb2xlLmxvZygiV2VsY29tZSB0byBQcm9ncmFtaXogQ2xvbmVkIGJ5IEpTISIpOw==",
        file_extension: "js",
    },
    // {
    //     id: 94,
    //     name: "TypeScript",
    //     logo_coloured: ts_coloured,
    //     snippet: ,
    //     file_  extension : "ts"  ,
    //
    // },
    {
        id: 51,
        name: "C#",
        logo_coloured: cSharp_coloured,
        snippet: "Ly8gT25saW5lIEMjIEVkaXRvciBmb3IgZnJlZQovLyBXcml0ZSwgRWRpdCBhbmQgUnVuIHlvdXIgQyMgY29kZSB1c2luZyBDIyBPbmxpbmUgQ29tcGlsZXIKCnVzaW5nIFN5c3RlbTsKCnB1YmxpYyBjbGFzcyBIZWxsb1dvcmxkCnsKICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKHN0cmluZ1tdIGFyZ3MpCiAgICB7CiAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUgKCJIZWxsbyBNb25vIFdvcmxkIik7CiAgICB9Cn0=",
        file_extension: "cs",

    },
    {
        id: 95,
        name: "Go",
        logo_coloured: go_coloured,
        snippet: "Ly8gT25saW5lIEdvIGNvbXBpbGVyIHRvIHJ1biBHb2xhbmcgcHJvZ3JhbSBvbmxpbmUKLy8gUHJpbnQgIkhlbGxvIFdvcmxkISIgbWVzc2FnZQoKcGFja2FnZSBtYWluCmltcG9ydCAiZm10IgoKZnVuYyBtYWluKCkgewogIGZtdC5QcmludGxuKCJIZWxsbyBXb3JsZCEiKQp9",
        file_extension: "go",
    },
    {
        id: 68,
        name: "PHP",
        logo_coloured: php_coloured,
        snippet: "PD9waHAKLy8gT25saW5lIFBIUCBjb21waWxlciB0byBydW4gUEhQIHByb2dyYW0gb25saW5lCi8vIFByaW50ICJIZWxsbyBXb3JsZCEiIG1lc3NhZ2UKZWNobyAiSGVsbG8gV29ybGQhIjsKPz4=",
        file_extension: "php",
    },
    {
        id: 80,
        name: "R",
        logo_coloured: r_coloured,
        snippet: "IyMgT25saW5lIFIgY29tcGlsZXIgdG8gcnVuIFIgcHJvZ3JhbSBvbmxpbmUKIyMgUHJpbnQgIkhlbGxvIFdvcmxkISIgbWVzc2FnZQoKbWVzc2FnZSA8LSJIZWxsbyBXb3JsZCEiCnByaW50KG1lc3NhZ2UpICA=",
        file_extension: "r",
    },
    {
        id: 73,
        name: "Rust",
        logo_coloured: rust_coloured,
        snippet: "Ly8gT25saW5lIFJ1c3QgY29tcGlsZXIgdG8gcnVuIFJ1c3QgcHJvZ3JhbSBvbmxpbmUKLy8gUHJpbnQgIkhlbGxvIFdvcmxkISIgbWVzc2FnZQoKZm4gbWFpbigpIHsKICAgIHByaW50bG4hKCJIZWxsbywgV29ybGQhIik7Cn0=",
        file_extension: "rs",
    },
]



export { languages }