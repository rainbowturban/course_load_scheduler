package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveEditOwnRequestEvent;
import com.google.gwt.event.shared.EventHandler;

public interface ReceiveEditOwnRequestEventHandler extends EventHandler{
	public void onReceiveEditCourse(ReceiveEditOwnRequestEvent evt);
}
