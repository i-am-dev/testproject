import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import axios from 'axios';
import { moxios } from 'moxios'
import App from '@/App.vue'

describe('App.vue', () => {
    let wrapper;
    beforeEach (() => {
        moxios.install();
        wrapper = shallowMount(App);
    });

    afterEach (() => {
        moxios.uninstall();
    })
    it.only ('Get the post for the Post Id', () => {
        const postId= 1;
        wrapper.setData({searchText: postId})
        click('#loadPost');
        const url= 'https://jsonplaceholder.typicode.com/posts/'+wrapper.vm.searchText;

        moxios.stubRequest(url, {
           status: 200,
           response:  {
                postId: 1,
                id: 1,
                name: "id labore ex et quam laborum",
                email: "Eliseo@gardner.biz",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            }
        });

        expect(wrapper.post.id).to.include(postId)

    })
})