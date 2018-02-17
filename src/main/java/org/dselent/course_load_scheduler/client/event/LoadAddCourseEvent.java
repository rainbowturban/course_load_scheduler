package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.LoadAddCourseAction;
import org.dselent.course_load_scheduler.client.event_handler.LoadAddCourseEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class LoadAddCourseEvent extends GwtEvent<LoadAddCourseEventHandler>{
	public static Type<LoadAddCourseEventHandler> TYPE = new Type<LoadAddCourseEventHandler>();
	
	private LoadAddCourseAction action;
	
	public LoadAddCourseEvent(LoadAddCourseAction action)
	{
		this.action = action;
	}
	
	public LoadAddCourseAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<LoadAddCourseEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(LoadAddCourseEventHandler handler)
	{
		handler.onLoadAddCourse(this);
	}

}
