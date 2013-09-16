
  // -------------------------- Masonry Column Shift -------------------------- //
 // custom layout mode
 $.Isotope.prototype._masonryColumnShiftReset = function () {
     // layout-specific props
     var props = this.masonryColumnShift = {
         columnBricks: []
     };
     // FIXME shouldn't have to call this again
     this._getSegments();
     var i = props.cols;
     props.colYs = [];
     while (i--) {
         props.colYs.push(0);
         // push an array, for bricks in each column
         props.columnBricks.push([])
     }
 };

 $.Isotope.prototype._masonryColumnShiftLayout = function ($elems) {
     var instance = this,
         props = instance.masonryColumnShift;
     $elems.each(function () {
         var $brick = $(this);
         var setY = props.colYs;

         // get the minimum Y value from the columns
         var minimumY = Math.min.apply(Math, setY),
             shortCol = 0;

         // Find index of short column, the first from the left
         for (var i = 0, len = setY.length; i < len; i++) {
             if (setY[i] === minimumY) {
                 shortCol = i;
                 break;
             }
         }

         // position the brick
         var x = props.columnWidth * shortCol,
             y = minimumY;
         instance._pushPosition($brick, x, y);
         // keep track of columnIndex
         $.data(this, 'masonryColumnIndex', i);
         props.columnBricks[i].push(this);

         // apply setHeight to necessary columns
         var setHeight = minimumY + $brick.outerHeight(true),
             setSpan = props.cols + 1 - len;
         for (i = 0; i < setSpan; i++) {
             props.colYs[shortCol + i] = setHeight;
         }

     });
 };

 $.Isotope.prototype._masonryColumnShiftGetContainerSize = function () {
     var containerHeight = Math.max.apply(Math, this.masonryColumnShift.colYs);
     return {
         height: containerHeight
     };
 };

 $.Isotope.prototype._masonryColumnShiftResizeChanged = function () {
     return this._checkIfSegmentsChanged();
 };

 $.Isotope.prototype.shiftColumnOfItem = function (itemElem, callback) {

     var columnIndex = $.data(itemElem, 'masonryColumnIndex');

     // don't proceed if no columnIndex
     if (!isFinite(columnIndex)) {
         return;
     }

     var props = this.masonryColumnShift;
     var columnBricks = props.columnBricks[columnIndex];
     var $brick;
     var x = props.columnWidth * columnIndex;
     var y = 0;
     for (var i = 0, len = columnBricks.length; i < len; i++) {
         $brick = $(columnBricks[i]);
         this._pushPosition($brick, x, y);
         y += $brick.outerHeight(true);
     }

     // set the size of the container
     if (this.options.resizesContainer) {
         var containerStyle = this._masonryColumnShiftGetContainerSize();
         containerStyle.height = Math.max(y, containerStyle.height);
         this.styleQueue.push({
             $el: this.element,
             style: containerStyle
         });
     }

     this._processStyleQueue($(columnBricks), callback)

 };

 $(function () {

     var $container = $('#container');

     $container.isotope({
         itemSelector: '.shifty-item',
         layoutMode: 'masonryColumnShift'
     });



     $('.clicker').click(

         function () {
             $(this).toggleClass('minusik');
             var boxing = $(this).closest('.content-item-box');
             var hehe = $('.comments').height();
             $('.comments').toggleClass('shower');
             if ($(this).hasClass('minusik')) {

                 $(boxing).height($(boxing).height() + hehe);
                 $container.isotope('shiftColumnOfItem', boxing[0]);

             } else {
                 $(boxing).height($(boxing).height() - hehe);
                 $('#container').isotope('shiftColumnOfItem', boxing[0]);
             }
         }
     );
 });

 $(function () {

     var $container = $('#container2');

     $container.isotope({
         itemSelector: '.shifty-item2',
         layoutMode: 'masonryColumnShift'
     });



     $('.clicker').click(

         function () {
             $(this).toggleClass('minusik');
             var boxing = $(this).closest('.content-item-box');
             var hehe = $('.comments').height();
             $('.comments').toggleClass('shower');
             if ($(this).hasClass('minusik')) {

                 $(boxing).height($(boxing).height() + hehe);
                 $container.isotope('shiftColumnOfItem', boxing[0]);

             } else {
                 $(boxing).height($(boxing).height() - hehe);
                 $('#container').isotope('shiftColumnOfItem', boxing[0]);
             }
         }
     );
 });


$.Isotope.prototype._getCenteredMasonryColumns = function() {

    this.width = this.element.width();

    var parentWidth = this.element.parent().width();

    var colW = this.options.masonry && this.options.masonry.columnWidth || // i.e. options.masonry && options.masonry.columnWidth

    this.$filteredAtoms.outerWidth(true) || // or use the size of the first item

    parentWidth; // if there's no items, use size of container

    var cols = Math.floor(parentWidth / colW);

    cols = Math.max(cols, 1);

    this.masonry.cols = cols; // i.e. this.masonry.cols = ....
    this.masonry.columnWidth = colW; // i.e. this.masonry.columnWidth = ...
};

$.Isotope.prototype._masonryReset = function() {

    this.masonry = {}; // layout-specific props
    this._getCenteredMasonryColumns(); // FIXME shouldn't have to call this again

    var i = this.masonry.cols;

    this.masonry.colYs = [];
        while (i--) {
        this.masonry.colYs.push(0);
    }
};

$.Isotope.prototype._masonryResizeChanged = function() {

    var prevColCount = this.masonry.cols;

    this._getCenteredMasonryColumns(); // get updated colCount
    return (this.masonry.cols !== prevColCount);
};

$.Isotope.prototype._masonryGetContainerSize = function() {

    var unusedCols = 0,

    i = this.masonry.cols;
        while (--i) { // count unused columns
        if (this.masonry.colYs[i] !== 0) {
            break;
        }
        unusedCols++;
    }

    return {
        height: Math.max.apply(Math, this.masonry.colYs),
        width: (this.masonry.cols - unusedCols) * this.masonry.columnWidth // fit container to columns that have been used;
    };
};