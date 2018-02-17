package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.LoadEditCourseAction;
import org.dselent.course_load_scheduler.client.event_handler.LoadEditCourseEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class LoadEditCourseEvent extends GwtEvent<LoadEditCourseEventHandler>{
	public static Type<LoadEditCourseEventHandler> TYPE = new Type<LoadEditCourseEventHandler>();
	
	private LoadEditCourseAction action;
	
	public LoadEditCourseEvent(LoadEditCourseAction action)
	{
		this.action = action;
	}
	
	public LoadEditCourseAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<LoadEditCourseEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(LoadEditCourseEventHandler handler)
	{
		handler.onLoadEditCoursePage(this);
	}
}
