$(function() {

  function onApplyHandler(date, context) {
      /**
       * @date is an array which be included dates(clicked date at first index)
       * @context is an object which stored calendar interal data.
       * @context.calendar is a root element reference.
       * @context.calendar is a calendar element reference.
       * @context.storage.activeDates is all toggled data, If you use toggle type calendar.
       * @context.storage.events is all events associated to this date
       */

      var $element = context.element;
      var $calendar = context.calendar;
      var $box = $element.siblings('.box').show();
      var text = 'You applied date ';

      if (date[0] !== null) {
          text += date[0].format('YYYY-MM-DD');
      }

      if (date[0] !== null && date[1] !== null) {
          text += ' ~ ';
      }
      else if (date[0] === null && date[1] == null) {
          text += 'nothing';
      }

      if (date[1] !== null) {
          text += date[1].format('YYYY-MM-DD');
      }

      $box.text(text);
  }

  $('#start_datepick').pignoseCalendar({
      apply: onApplyHandler,
      lang: 'ko',
      format: 'YYYY-MM-DD', // date format string. (2017-02-02)
      buttons: true, // It means you can give bottom button controller to the modal which be opened when you click.
  });
  $('#end_datepick').pignoseCalendar({
      apply: onApplyHandler,
      lang: 'ko',
      format: 'YYYY-MM-DD', // date format string. (2017-02-02)
      buttons: true, // It means you can give bottom button controller to the modal which be opened when you click.
  });

});
