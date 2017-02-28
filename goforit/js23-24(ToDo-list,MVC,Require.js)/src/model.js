/**
 * Created by Roman on 28.02.2017.
 */
define(function () {
        return function Model(data) {
            var self = this;
            self.data = data;
            self.addItem = function (item) {
                if(item.length === 0) {
                    return;
                }
                self.data.push(item);

                return self.data;
            };

            self.removeItem = function (item) {
                var removeItem = self.data.indexOf(item);
                if(removeItem === -1){
                    return;
                }
                self.data.splice(removeItem, 1);

                return self.data;
            };

            self.editItem = function (item) {
                var origItem = self.data.indexOf(item);
                if(origItem === -1) {
                    return;
                }
                var editItem = prompt('Edit this item', item);
                if(editItem == '') {
                    alert('Your editing unnecessary');
                    return;
                }
                self.data[origItem] = editItem;

                return self.data;
            };
        }
    }
);



