package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.LoadEditSectionEvent;
import com.google.gwt.event.shared.EventHandler;

public interface LoadEditSectionEventHandler extends EventHandler{
	public void onLoadEditSection(LoadEditSectionEvent evt);
}
