'use strict';

describe('imageList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('testApp'));

  // Test the controller
  describe('ImageListController', function() {

    it('should create a `images` model with 3 images', inject(function($componentController) {
      var ctrl = $componentController('imageList');

      expect(ctrl.images.length).toBe(10);
    }));

  });

});
