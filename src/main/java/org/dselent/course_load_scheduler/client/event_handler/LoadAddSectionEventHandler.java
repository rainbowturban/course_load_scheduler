package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.LoadAddSectionEvent;

import com.google.gwt.event.shared.EventHandler;

public interface LoadAddSectionEventHandler extends EventHandler {
	public void onLoadAddSection(LoadAddSectionEvent evt);
}
