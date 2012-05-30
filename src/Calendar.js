/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 5/25/12
 * Time: 12:53 PM
 */

define(['Component', 'WeekView', 'MonthView', 'text!Calendar.tpl!strip'],
    function (Component, WeekView, MonthView, CalendarTpl) {

        var Calendar = function (options) {

            // If el is not specified by the user using div as parent element
            if (!options) options = {el:'<div/>'};

            // Calling base Component type constructor
            Component.call(this, options);

            /**
             * Instance of WeekView
             * @type {WeekView}
             */
            this.weekView = new WeekView({model:this.model, date:this.date});
            this.weekView.$el.on(this.MOUSE_DOWN_EV, {context:this}, this.container_mouseDownHandler);

            /**
             * Instance of MonthView
             * @type {MonthView}
             */
            this.monthView = null;

            /**
             * Current visible view
             * @type {MonthView || WeekView}
             */
            this.currentView = this.weekView;

            /**
             * Instance of NavigationBar
             * @type {NavigationBar}
             */
            this.navigationBar = null;

            /**
             * Current calendar date
             * @type {Date}
             */
            this.date = options && options.date ? options.date : new Date;

        };
        Calendar.prototype = Object.create(Component.prototype);

        Calendar.prototype.render = function () {

            this.$calendar = $(CalendarTpl);
            this.$calendar.append(this.currentView.el);
            this.currentView.render();

            // Applying default calendar template
            this.$el.html(this.$calendar);

            return this;
        };

        Calendar.prototype.container_mouseDownHandler = function (event) {
            alert('mouse down handle');

//            var that = event.data.context;
//
//            // Getting touch point with touch coordinates, this depends on the runtime,
//            // on devices it's part of touches array
//            var touchPoint = (event.type.indexOf('touch') == 0) ? event.originalEvent.touches[0] : event,
//                touchesCount = (event.type.indexOf('touch') == 0) ? event.originalEvent.touches.length : 1;
//
//            // Setting touch point X and Y
//            that.container_mouseDownHandler.touchPoint = {
//                x:touchPoint.pageX,
//                y:touchPoint.pageY
//            };
//
//            if (touchesCount == 1) {
//                // For desktop devices document needs to be a move and up target
//                var moveTarget = $(document);
//
//                // Adding move and up listeners
//                moveTarget.on(that.MOUSE_MOVE_EV, {context:that}, that.container_mouseMoveHandler);
//                moveTarget.on(that.MOUSE_UP_EV, {context:that}, that.container_mouseUpHandler);
//            }
        };

        return Calendar;
    });