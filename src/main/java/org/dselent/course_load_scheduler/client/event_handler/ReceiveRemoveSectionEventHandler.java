package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveRemoveSectionEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveRemoveSectionEventHandler extends EventHandler{
	public void onReceiveRemoveSection(ReceiveRemoveSectionEvent evt);
}
