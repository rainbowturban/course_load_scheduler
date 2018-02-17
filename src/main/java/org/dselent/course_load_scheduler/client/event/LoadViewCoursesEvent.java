package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.event_handler.LoadViewCoursesEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class LoadViewCoursesEvent extends GwtEvent<LoadViewCoursesEventHandler>{
	public static Type<LoadViewCoursesEventHandler> TYPE = new Type<LoadViewCoursesEventHandler>();
	
	private LoadViewCoursesAction action;
	
	public LoadViewCoursesEvent(LoadViewCoursesAction action)
	{
		this.action = action;
	}
	
	public LoadViewCoursesAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<LoadViewCoursesEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(LoadViewCoursesEventHandler handler)
	{
		handler.onLoadViewCourses(this);
	}

}
