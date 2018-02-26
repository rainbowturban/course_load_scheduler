package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveGetAllAccountEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveGetAllAccountEventHandler extends EventHandler{
	public void onReceiveGetAllAccount(ReceiveGetAllAccountEvent evt);
}
