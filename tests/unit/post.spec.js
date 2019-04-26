/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { mount, shallowMount } from "@vue/test-utils";
import axios from "axios";
import moxios from "moxios";
import expect from "expect";
import sinon from "sinon";
import Post from "../../src/components/Post.vue";

describe("Post.vue", () => {
  let wrapper;
  let componentInstance;
  let onFulfilled;
  let onRejected;
  beforeEach(() => {
    moxios.install();
    onFulfilled = sinon.spy();
    onRejected = sinon.spy();
    wrapper = shallowMount(Post, {
      propsData: {
        postId: "1"
      }
    });
    componentInstance = wrapper.vm;
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Gets post data", done => {
    const API_URL = `https://jsonplaceholder.typicode.com/posts/1`;
    const mockDataSinglePost = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
    moxios.stubRequest(API_URL, {
      status: 200,
      response: mockDataSinglePost
    });

    let onFulfilled = sinon.spy();
    axios.get(API_URL, mockDataSinglePost).then(onFulfilled);

    // moxios.wait(function() {
    //   const response = onFulfilled.getCall(0).args[0];
    //   expect(onFulfilled.calledOnce).toBe(true);
    //   expect(response.status).toBe(200);
    //   expect(componentInstance.post.id).toBe(1);
    //   expect(componentInstance.post.title).toBe(
    //     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    //   );
    //   expect(response.data).toEqual(mockDataSinglePost);

    //   done();
    // });

    componentInstance.$nextTick(() => {});

    moxios.wait(function() {
      expect(componentInstance.post.id).toBe(1);
      expect(componentInstance.post.userId).toBe(1);
      expect(componentInstance.post.title).toBe(
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
      expect(componentInstance.post.body).toBe(
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      );
      done();
    }, 5000);
    // componentInstance.$nextTick(() => {
    //   moxios.wait(() => {
    //     expect(componentInstance.post.id).toBe(1);
    //     expect(componentInstance.post.userId).toBe(1);
    //     expect(componentInstance.post.title).toBe(
    //       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    //     );
    //     expect(componentInstance.post.body).toBe(
    //       "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //     );
    //     done();
    //   });
    //});
  });
});
