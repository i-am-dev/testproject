import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { moxios } from 'moxios'
import Comments from '@/components/Comments.vue'
import { isIterable } from 'core-js';

describe('Comments', () => {
    let wrapper;
    beforeEach (() => {
        moxios.install();
        wrapper = shallowMount(Comments, {
            propsData: {
                postId: 1
            }
        });
    });

    afterEach (() => {
        moxios.uninstall();
    })


    it ('Load all the comments', () => {
        const url = 'https://jsonplaceholder.typicode.com/posts/' + wrapper.postId + '/comments'
        moxios.stubRequest(url, {
            status: 200,
            response: [
                {
                postId: 1,
                id: 1,
                name: "id labore ex et quam laborum",
                email: "Eliseo@gardner.biz",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                },
                {
                postId: 1,
                id: 2,
                name: "quo vero reiciendis velit similique earum",
                email: "Jayne_Kuhic@sydney.com",
                body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
                }
            ]
        });

        expect(wrapper.comments.length).to.equals(2)

    })
})