const app = require('./index');
const supertest = require('supertest');
const request = supertest(app);

describe('Two args', () => {
    it('Sum request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 2,
                    operation: "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(3);
            });
    });

    it('Sub request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 2,
                    operation: "-"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(-1);
            });
    })

    it('Mul request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 5,
                    secondArg: 3,
                    operation: "*"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(15);
            });
    })

    it('Div request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 10,
                    secondArg: 2,
                    operation: "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(5);
            });
    })

    it('Exp request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 3,
                    secondArg: 3,
                    operation: "^"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(27);
            });
    })

    it('Per request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 10,
                    secondArg: 50,
                    operation: "%"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(5);
            });
    })

    it('Max request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 100,
                    secondArg: 57,
                    operation: "max"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(100);
            });
    })

    it('Min request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 10,
                    secondArg: 2,
                    operation: "min"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(2);
            });
    })

    it('Not implemented', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 10,
                    secondArg: 2,
                    operation: "loge"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Operation not implemented");
            });
    })

    it('invalid number', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: "test",
                    secondArg: 2,
                    operation: "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Ошибка в числах.");
            });
    })

    it('Percent negative', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: "100",
                    secondArg: -10,
                    operation: "%"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Percent can\'t be negative');
            });
    })

    it('Devider zero', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: "100",
                    secondArg: 0,
                    operation: "/"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Divider can\'t be zero');
            });
    })
});

//

describe('One arg', () => {
    it('Sin request', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    firstArg: 0,
                    operation: "sin"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0);
            });
    });

    it('Cos request', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    firstArg: 0,
                    operation: "cos"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(1);
            });
    })

    it('Tan request', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    firstArg: 0,
                    operation: "tan"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(0);
            });
    })

    it('Sqrt request', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    firstArg: 100,
                    operation: "sqrt"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(10);
            });
    })

    it('Sqrt negative', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    firstArg: -100,
                    operation: "sqrt"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe('Argument can\'t be negative');
            });
    })
    


    it('Not implemented', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    firstArg: 10,
                    operation: "log"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Operation not implemented");
            });
    })

    it('invalid number', () => {
        return request
            .post('/one-arg')
            .send(
                {
                    firstArg: "test",
                    operation: "sqrt"
                }
            )
            .expect('Content-type', /json/)
            .expect(400)
            .then(response => {
                expect(response.body).toBe("Ошибка в числе.");
            });
    })
});