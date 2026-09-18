import http from "k6/http";
import { sleep } from "k6";
import { check } from "k6";

export const options = {
    vus: 1,
    duration: '1s'
}

export default function(){
    const url = 'https://dummyjson.com/auth/login';
    const payload = JSON.stringify({
        username: kunj,
        password: test123,
    })
    const params = {
        headers: {
            'content-type': 'application/json'
        },
    }
    const res = http.post(url, payload, params);

    check(res, {
        'Is status 200 or not' : (r) => r.status === 200,
        'Is response body has username': (r) => r.body.includes('kunj'),
    });
}
