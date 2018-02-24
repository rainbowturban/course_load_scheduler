package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveEditSectionEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveEditSectionEventHandler extends EventHandler{
	public void onReceiveEditSection(ReceiveEditSectionEvent evt);

}
