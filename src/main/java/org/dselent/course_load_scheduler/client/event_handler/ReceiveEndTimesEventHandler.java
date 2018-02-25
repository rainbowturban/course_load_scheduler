package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveEndTimesEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveEndTimesEventHandler extends EventHandler {
	  public void onReceiveEndTimes(ReceiveEndTimesEvent evt);

}
