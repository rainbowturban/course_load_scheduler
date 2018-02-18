package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.GetCoursesAction;
import org.dselent.course_load_scheduler.client.event_handler.GetCoursesEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class GetCoursesEvent extends GwtEvent<GetCoursesEventHandler>{
	public static Type<GetCoursesEventHandler> TYPE = new Type<GetCoursesEventHandler>();
	
	private GetCoursesAction action;
	
	public GetCoursesEvent(GetCoursesAction action)
	{
		this.action = action;
	}
	
	public GetCoursesAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<GetCoursesEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(GetCoursesEventHandler handler)
	{
		handler.onGetCourses(this);
	}

}
