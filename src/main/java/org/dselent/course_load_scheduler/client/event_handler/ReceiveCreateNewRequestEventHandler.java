package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveCreateNewRequestEvent;
import com.google.gwt.event.shared.EventHandler;

public interface ReceiveCreateNewRequestEventHandler extends EventHandler {
	public void onReceiveCreateNewRequest(ReceiveCreateNewRequestEvent evt);
}
